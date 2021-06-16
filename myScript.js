  function openUrl() {
    var inputId = document.getElementById('customerID1').value;
    window.open('https://crmprebau.svcrm.jlrcloud.com/crm_jlr(bD1lbiZjPTEwMA==)/main.htm#!/customer/' + inputId + '/overview', '_blank');
    document.getElementById("formID").reset();
    return false;
  }

  function getVin() {
    var inputId = document.getElementById('customerID2').value;
    var inputVin = document.getElementById('vin').value;
    window.open('https://crmprebau.svcrm.jlrcloud.com/crm_jlr(bD1lbiZjPTEwMA==)/main.htm#!/customer/' + inputId + '/vehicle/' + inputVin + '/purchase-and-ownership', '_blank');
    document.getElementById("formID").reset();
    return false;
  }



  $(document).ready(function() {
    disableBtn1();
    disableBtn2();
  });

  function disableBtn2() {
    $('#customerID2, #vin').keyup(function() {
      var empty = false;
      $('#customerID2, #vin').each(function() {
        if ($(this).val() == '') {
          empty = true;
        }
      });
      if (empty) {
        $('#submitBtn2').attr('disabled', 'disabled');
      } else {
        $('#submitBtn2').removeAttr('disabled');
      }
    });
  }

  function disableBtn1() {
    $('#customerID1').keyup(function() {
      var empty = false;
      $('#customerID1').each(function() {
        if ($(this).val() == '') {
          empty = true;
        }
      });
      if (empty) {
        $('#submitBtn1').attr('disabled', 'disabled');
      } else {
        $('#submitBtn1').removeAttr('disabled');
      }
    });
  }
