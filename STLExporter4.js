var STLExporter = function () { };

STLExporter.prototype = {

    constructor: STLExporter,

    parse: (function () {

        var vector = new Vector3();
        var normalMatrixWorld = new Matrix3();

        return function parse(scene) {
            var objects = [];
            var triangles = 0;

            scene.traverse(function (object) {

                if (object.isMesh) {

                    var geometry = object.geometry;

                    if (geometry.isBufferGeometry) {

                        geometry = new Geometry().fromBufferGeometry(geometry);

                    }

                    if (geometry.isGeometry) {

                        triangles += geometry.faces.length;

                        objects.push({

                            obj: object,
                            geometry: geometry,
                            matrixWorld: object.matrixWorld

                        });

                    }

                }

            });

            var output = '';

            output += 'solid exported\n';

            for (var i = 0, il = objects.length; i < il; i++) {

                var object = objects[i];

                var vertices = object.geometry.vertices;
                var faces = object.geometry.faces;
                var matrixWorld = object.matrixWorld;

                normalMatrixWorld.getNormalMatrix(matrixWorld);

                for (var j = 0, jl = faces.length; j < jl; j++) {

                    var face = faces[j];

                    vector.copy(face.normal).applyMatrix3(normalMatrixWorld).normalize();

                    output += '\tfacet normal ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';
                    output += '\t\touter loop\n';

                    var indices = [face.a, face.b, face.c];

                    for (var k = 0; k < 3; k++) {

                        vector.copy(vertices[indices[k]]).applyMatrix4(matrixWorld);

                        if (object.obj.type == "SkinnedMesh") {
                            console.log("Test!")
                            vector = this.boneTransform(object.obj, vertices[indices[k]], indices[k]);
                        }

                        output += '\t\t\tvertex ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';

                    }

                    output += '\t\tendloop\n';
                    output += '\tendfacet\n';

                }

            }

            output += 'endsolid exported\n';

            return output;

        };

    }()),
    boneTransform: (function () {

        var clone = new Vector3(), result = new Vector3(), skinIndices = new Vector4(), skinWeights = new Vector4();
        var temp = new Vector3(), tempMatrix = new Matrix4(), properties = ['x', 'y', 'z', 'w'];

        return function (object, vertex, index) {

            if (object.geometry.isBufferGeometry) {

                var index4 = index * 4;
                skinIndices.fromArray(object.geometry.attributes.skinIndex0.array, index4);
                skinWeights.fromArray(object.geometry.attributes.skinWeight0.array, index4);

            } else if (object.geometry.isGeometry) {

                skinIndices.copy(object.geometry.skinIndices1[index]);
                skinWeights.copy(object.geometry.skinWeights1[index]);

            }

            var clone = vertex.clone().applyMatrix4(object.bindMatrix); result.set(0, 0, 0);

            for (var i = 0; i < 4; i++) {

                var skinWeight = skinWeights[properties[i]];

                if (skinWeight != 0) {

                    var boneIndex = skinIndices[properties[i]];
                    tempMatrix.multiplyMatrices(object.skeleton.bones[boneIndex].matrixWorld, object.skeleton.boneInverses[boneIndex]);
                    result.add(temp.copy(clone).applyMatrix4(tempMatrix).multiplyScalar(skinWeight));

                }

            }

            return clone.copy(result.applyMatrix4(object.bindMatrixInverse));

        };

    })(),

};

var exporter = new STLExporter();