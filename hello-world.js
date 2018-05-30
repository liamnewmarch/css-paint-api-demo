class HelloWorld {

  static get inputProperties() {
    return [
      '--background-color',
      '--background-padding',
    ];
  }

  paint(context, geometry, properties) {
    const color = properties.get('--background-color').value;
    const padding = properties.get('--background-padding').value;
    const height = geometry.height - padding * 2;
    const width = geometry.width - padding * 2;
    context.fillStyle = color;
    context.fillRect(padding, padding, width, height);
  }
}

registerPaint('hello-world', HelloWorld);
