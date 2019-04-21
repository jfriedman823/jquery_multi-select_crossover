function crossover() {
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////CROSSOVER FUNCTIONALITY///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
    var Data = ['Chaperone', 'Jade Rabbit', 'Wardcliff Coil',
                'Tractor Cannon', 'Sweet Business', 'Thorn',
                'Graviton Lance', 'Wavesplitter', 'Telesto',
                'Black Splindle', 'Polaris Lance', 'Ace of Spades'];

    populateItems(Data, '#items');

    //add btn
    $('#crossover-btn-add').click(function() {
        var selected = $('select#items').val();
        $('#items option:selected').remove();
        generateOptionElements(selected, '#selected');
    });
    
    //remove btn
    $('#crossover-btn-remove').click(function() {
        var selected = $('select#selected').val();
        $('#selected option:selected').remove();
        $('#items option').each(function() {
            selected.push($(this).val());
        });
    
        $('#items option').remove();
        selected.sort();
    
        generateOptionElements(selected, '#items');
    });

    //add all btn
    $('#crossover-btn-add-all').click(function() {
        var selected = [];
        $('#items option').each(function() {
            selected.push($(this).val());
        });

        $('#items option').remove();
        
        generateOptionElements(selected, '#selected');
    });

    //remove all btn
    $('#crossover-btn-remove-all').click(function() {
        var selected = [];
        $('#items option').each(function() {
            selected.push($(this).val());
        });

        $('#selected option').each(function() {
            selected.push($(this).val());
        });
        
        $('#items option').remove();
        $('#selected option').remove();
        selected.sort();

        generateOptionElements(selected, '#items');
    });
    
    //populate items box with arr
    function populateItems(arr, targetMultiSelect) {
        arr.sort();
        generateOptionElements(arr, targetMultiSelect);
    }
    
    //temporarily add a new item to the crossover
    $('#add-new-item-btn').click(function() {
        if ($('#new-item-input').val() !== '') {
            var selected = [];
            selected.push($('#new-item-input').val().trim());
    
            $('#selected option').each(function() {
                selected.push($(this).val()); 
            });
    
            selected.sort();
            $('#selected').empty();
    
            generateOptionElements(selected, '#selected');
    
            $('#new-item-input').val('');
        }
    });
    
    //reset demo
    $('#reset-btn').click(function() {
        $('#items').empty();
        $('#selected').empty();
        populateItems(Data, '#items');
    });
    
    
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////MINI FUNCTIONS TO AVOID REPEAT CODE///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
        
//create option elements
function generateOptionElements(arr, targetMultiSelect) {
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('OPTION');
        var text = document.createTextNode(arr[i]);
        option.appendChild(text);
        $(targetMultiSelect).append(option);
    }
}
};