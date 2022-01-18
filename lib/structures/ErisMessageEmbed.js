const Eris = require("eris");
const { compact } = require("../utils/Util");

module.exports = class ErisMessageEmbed {

    /**
     * @param {Eris.EmbedOptions} data 
     */
    constructor(data = {}) {
        
        this.title = data.title ?? "";

        this.url = data.url ?? "";

        this.description = data.description ?? "";

        this.fields = data.fields ?? [];

        this.author = data.author ?? {};

        this.footer = data.footer ?? {};

        this.image = data.image ?? {};

        this.thumbnail = data.thumbnail ?? {};

        this.color = data.color ?? 0;

        this.timestamp = data.timestamp ?? new Date();
    }

    setTitle(str) {
        return compact(this, [this.title, str]);
    }

    setUrl(url) {
        return compact(this, [this.url, url]);
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description
        };
    }
}