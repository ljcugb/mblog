(function($){
    $(document).ready(function(){
        if($('textarea[name=content]').length) {
            CKEDITOR.replace('content', {
                'skin': 'kama',
                'width': 900,
                'height': 420,
                //'filebrowserWindowWidth' : '900',
                //'filebrowserWindowHeight' : '600',
                'toolbar': 'MyToolbar',
                'toolbar_MyToolbar': [{ 'name': 'clipboard',
                    'items' : [ 'Paste','PasteText','PasteFromWord','-',
                        'Undo','Redo','-','Find', ]
                },


                { 'name': 'basicstyles',
                    'items' : [ 'Bold','Italic','Underline','Strike',
                        'Subscript','Superscript','-','RemoveFormat' ]
                },

                { 'name': 'colors',
                    'items' : [ 'TextColor','BGColor' ]
                },


                { 'name': 'styles',
                    'items' : ['Format','Font','FontSize' ]
                },

                '/',

                { 'name': 'paragraph',
                    'items' : [ 'NumberedList','BulletedList','-',
                        /*'Outdent','Indent','-',*/'Blockquote','CreateDiv',
                        '-','JustifyLeft','JustifyCenter',
                        'JustifyRight' ]
                },

                { 'name': 'links',
                    'items' : [ 'Link','Unlink' ]
                },

                { 'name': 'insert',
                    'items' : ['Image','Table',
                        'Smiley','SpecialChar' ]
                },

                { 'name': 'tools',
                    'items' : [ 'Maximize', '-', 'ShowBlocks',
                        'DocProps','Preview', '-', 'Source']
                },]
            });
        }
    });
})(django.jQuery);


