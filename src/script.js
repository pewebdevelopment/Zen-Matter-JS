    function project(){

    document.getElementById('renderport').style.padding = "10px";
    document.getElementById('ftr').style.position = 'relative' ;

    // module aliases defined
    var Engine = Matter.Engine,
        Events = Matter.Events,
        Render = Matter.Render,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Vector = Matter.Vector;

    // creating an engine
    var engine = Engine.create();

    // creating a renderer
    var render = Render.create({
        element: document.getElementById('renderport'),
        engine: engine,
        options: {
            width: 1200,
            height: 500,
            showVelocity: true,
            showCollisions: true,
            background : '#57bdd6'
        }
    });

    //calculating the  horizontal and vertical velocity
    var angle = $("#angl").val();
    angle = angle*(Math.PI)/180;
    var v = $("#vel").val();
    vx = v*(Math.cos(angle)); 
    vy = -v*(Math.sin(angle));
    var coeffrst = $('#rst').val();


    // create two bodies and a ground
    var ball = Bodies.circle(50,440, 30 , {friction: 0, frictionAir:0, restitution: coeffrst, inverseInertia: 0 });
    var ground = Bodies.rectangle(400, 500, 2000, 60, {friction: 0, isStatic: true });

    engine.world.gravity.y = 1;
    Matter.Body.setVelocity(ball, {x:vx , y:vy});

    // adding all of the bodies to our world
    World.add(engine.world, [ground, ball]);

    //adding the trail
    var trail = [];
    Events.on(render, 'afterRender', function() {
        trail.unshift({
            position: Vector.clone(ball.position),
            speed: ball.speed
        });
        Render.startViewTransform(render);
        render.context.globalAlpha = 0.7;
        for (var i = 0 ; i < trail.length ; i += 1) {
            var point = trail[i].position,
                speed = trail[i].speed;   
            var hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
            render.context.fillStyle = 'hsl(' + hue + ', 100%, 55%)';
            render.context.fillRect(point.x, point.y, 2, 2);
        }
        render.context.globalAlpha = 1;
        Render.endViewTransform(render);
        if (trail.length > 2000) {
            trail.pop();
        }
    });

    // adding the mouse control
    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // to run the engine
    Engine.run(engine);
    // to run the renderer
    Render.run(render);

}
