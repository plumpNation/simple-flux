riot.tag2('accordion', '<article id="{id}" class="accordion {\'closed\': closed}"> <h1><button onclick="{toggle}">{title}</button></h1> <div class="content"> {content} </div> </article>', '', '', function(opts) {
        this.id      = this.opts.id;
        this.title   = this.opts.title;
        this.content = this.opts.content;

        this.on('mount', () => this.contentElement = this.root.querySelector('.content'));

        this.toggle = () => this.trigger('toggle');
});
