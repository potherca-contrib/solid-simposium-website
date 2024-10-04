var textSettings = {
    block: [
        {tag: 'h2', name: 'Heading 2'},
        {tag: 'h3', name: 'Heading 3'},
        {tag: 'p', name: 'Paragraph'},
        {tag: 'ul', name: 'Unordered List'},
        {tag: 'ol', name: 'Ordered List'},
        {tag: 'blockquote', name: 'Blockquote'},
        {tag: 'pre', name: 'Preformatted'} 
    ]
};
var seSettings = {
    'pageTemplates' : {
        'templates' : [
            {name: "Home", template: "index.html"},
            {name: "Generic", template: "generic.html"},
            {name: "Blog Post", template: "blog.html"}
        ]
    },
    'simply-text-cursor' : textSettings,
    'simply-text-selection' : textSettings,
    'simply-image' : {
        'responsive' : {
            'sizes' : [ 1024, 720, 640, 320, 160 ]
        }
    },
    'plugins' : [
        'plugin.simply-scaler.html',
        'plugin.simply-baseurl.html'
    ]
};