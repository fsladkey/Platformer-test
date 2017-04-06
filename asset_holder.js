export default class AssetHolder {
  constructor(sources) {
    this.sources = sources;
    this.numToLoad = Object.keys(sources).length;
    this.numLoaded = 0;
    this.images = {};
  }

  get(key) {
    return this.images[key];
  }

  onLoad(cb) {
    this.onLoadCallback = cb;
  }

  load() {
    for (let imageName in this.sources) {
      const image = new Image();
      this.images[imageName] = image;
      image.onload = () => {
        if (++this.numLoaded === this.numToLoad) {
          this.onLoadCallback();
        }
      }
      image.src = this.sources[imageName];
    }
  }
}
