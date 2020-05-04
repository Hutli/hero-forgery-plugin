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

                        output += '\t\t\tvertex ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';

                    }

                    output += '\t\tendloop\n';
                    output += '\tendfacet\n';

                }

            }

            output += 'endsolid exported\n';

            return output;

        };

    }())

};