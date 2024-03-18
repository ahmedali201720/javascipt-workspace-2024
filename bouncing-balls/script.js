const canvas = document.querySelector("#bouncingBalls");

if (canvas) {
  const context = canvas.getContext("2d");
  const Ball = function (x, y, fill = "#ff0000", radius) {
    this.color = fill;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.direction = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 2.5 + 1;
  };

  Ball.prototype = {
    updatePosition: function (width, height) {
      this.x += Math.cos(this.direction) * this.speed;
      this.y += Math.sin(this.direction) * this.speed;
      if (this.x - this.radius < 0) {
        this.x = this.radius;
        this.direction = Math.atan2(
          Math.sin(this.direction),
          Math.cos(this.direction) * -1
        );
      } else if (this.x + this.radius > width) {
        this.x = width - this.radius;
        this.direction = Math.atan2(
          Math.sin(this.direction),
          Math.cos(this.direction) * -1
        );
      }
      if (this.y - this.radius < 0) {
        this.y = this.radius;
        this.direction = Math.atan2(
          Math.sin(this.direction) * -1,
          Math.cos(this.direction)
        );
      } else if (this.y + this.radius > height) {
        this.y = height - this.radius;
        this.direction = Math.atan2(
          Math.sin(this.direction) * -1,
          Math.cos(this.direction)
        );
      }
    },
  };

  const balls = new Array();
  let x = canvas.getBoundingClientRect().width;
  let y = canvas.getBoundingClientRect().height;

  balls.push(new Ball(x, y, "#FF410D", 75));
  balls.push(new Ball(x, y, "#00B852", 75));
  balls.push(new Ball(x, y, "#FE96B5", 75));
  balls.push(new Ball(x, y, "#FAE800", 75));
  balls.push(new Ball(x, y, "#FF410D", 75));
  balls.push(new Ball(x, y, "#00B852", 75));
  balls.push(new Ball(x, y, "#FF410D", 75));
  balls.push(new Ball(x, y, "#FF410D", 75));
  balls.push(new Ball(x, y, "#FF8114", 75));
  balls.push(new Ball(x, y, "#FF8114", 75));
  balls.push(new Ball(x, y, "#FAE800", 75));
  balls.push(new Ball(x, y, "#FE96B5", 75));

  function loop() {
    window.requestAnimationFrame(loop);
    let height = canvas.getBoundingClientRect().height;
    let width = canvas.getBoundingClientRect().width;
    context.canvas.width = width;
    context.canvas.height = height;
    balls?.forEach((ball) => {
      context.fillStyle = ball.color;
      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      context.fill();
      ball.updatePosition(width, height);
    });
  }

  loop();
}
