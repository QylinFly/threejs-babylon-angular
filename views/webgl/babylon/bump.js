var CreateTeapot = function (name, options, scene) {
    var postData = {text: 'long blob of text'};
    //下面这一行会被当成参数附加到URL后面，所以post请求最终会变成/api/user?id=5
    var config = {params: {id: '5'}};
    $http.post('api/user', postData, config
    ).success(function (data, status, headers, config) {
        //成功之后做一些事情
    }).error(function (data, status, headers, config) {
        //处理错误
    });

    var sphere = new BABYLON.Mesh(name, scene);
    var vertexData = BABYLON.VertexData.CreateSphere(options);
    vertexData.applyToMesh(sphere, options.updatable);
    return sphere;
};

var CreateBumpScene = function (engine) {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 100, 2), scene);
    var sphere = BABYLON.Mesh.CreateSphere("Sphere", 360, 3, scene);
    var material = new BABYLON.StandardMaterial("kosh", scene);
    material.bumpTexture = new BABYLON.Texture("models/normalMap.jpg", scene);
    material.bumpTexture.level = 1.0;
    material.diffuseColor = new BABYLON.Color3(1, 0, 0);

    sphere.material = material;


    camera.setPosition(new BABYLON.Vector3(-5, 5, 0));

    // Animations
    scene.registerBeforeRender(function () {
        sphere.rotation.y += 0.02;
    });

    return scene;
};