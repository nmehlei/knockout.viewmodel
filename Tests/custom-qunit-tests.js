module("Sorting", {
    setup: function () {
        //ko.viewmodel.options.logging = true;
    },
    teardown: function () {
        //ko.viewmodel.options.logging = false;
    }
});


test("Sorting test 1", function () {
    var model, updatedModel, viewmodel;

    model = {
        items: [
            {id:1, label: 'foo'},
            {id:2, label: 'bar'}
        ]
    };

    var mapping = {
        append: [
            '{root}.items[i].id',
            '{root}.items[i].label'
        ],
        arrayChildId: {
            '{root}.items': 'id'
        }
    };

    updatedModel = {
        items: [
            {id:2, label: 'bar'},
            {id:3, label: 'foobar'},
            {id:4, label: 'foobar2'},
            {id:5, label: 'foobar3'}
        ]
    };

    viewmodel = ko.viewmodel.fromModel(model, mapping);
    ko.viewmodel.updateFromModel(viewmodel, updatedModel);

    console.log('updatedModel:');
    console.log(updatedModel.items);
    console.log('viewmodel');
    console.log(viewmodel.items());
    deepEqual(viewmodel.items().length, updatedModel.items.length, "Items count");
    deepEqual(viewmodel.items()[0].label, updatedModel.items[0].label, "Item 0");
    deepEqual(viewmodel.items()[1].label, updatedModel.items[1].label, "Item 1");
    deepEqual(viewmodel.items()[2].label, updatedModel.items[2].label, "Item 2");
    deepEqual(viewmodel.items()[3].label, updatedModel.items[3].label, "Item 3");
});
