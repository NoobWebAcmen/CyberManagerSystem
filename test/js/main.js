$(function () {

  'use strict';

  var console = window.console || { log: function () {} };
  var $myCanvas = $('#myCanvas');  //图片
  var $download = $('#download');
  var $dataX = $('#dataX'); //侧边X
  var $dataY = $('#dataY');  //侧边Y
  var $dataHeight = $('#dataHeight');
  var $dataWidth = $('#dataWidth');
  var $dataRotate = $('#dataRotate');
  var $dataScaleX = $('#dataScaleX');
  var $dataScaleY = $('#dataScaleY');
  var options = {
        aspectRatio: 16 / 9,
        preview: '.img-preview',        //侧边裁切大小栏
        crop: function (e) {
          $dataX.val(Math.round(e.x));           //侧边保存crop框的值
          $dataY.val(Math.round(e.y));
          $dataHeight.val(Math.round(e.height));
          $dataWidth.val(Math.round(e.width));
          $dataRotate.val(e.rotate);
          $dataScaleX.val(e.scaleX);
          $dataScaleY.val(e.scaleY);
        },
        background : false,
        autoCrop : false
      };

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();


  // Cropper
  $myCanvas.on({
    'build.cropper': function (e) {
      // console.log(e.type);
    },
    'built.cropper': function (e) {
      // console.log(e.type);
    },
    'cropstart.cropper': function (e) {
      // console.log(e.type, e.action);
    },
    'cropmove.cropper': function (e) {
      // console.log(e.type, e.action);
    },
    'cropend.cropper': function (e) {
      // console.log(e.type, e.action);
    },
    'crop.cropper': function (e) {
      // console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
    },
    'zoom.cropper': function (e) {
      // console.log(e.type, e.ratio);
    }
  }).cropper(options);


  // Buttons $.isFunction 判断是不是函数
  if (!$.isFunction(document.createElement('canvas').getContext)) {
    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);   //下载canvas图片，Get Cropped Canvas
  }

  if (typeof document.createElement('cropper').style.transition === 'undefined') {
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
  }


  // Download
  if (typeof $download[0].download === 'undefined') {
    $download.addClass('disabled');
  }


  // Options 用不上
  $('.docs-toggles').on('change', 'input', function () {
    var $this = $(this);
    var name = $this.attr('name');
    var type = $this.prop('type');
    var cropBoxData;
    var canvasData;

    if (!$myCanvas.data('cropper')) {
      return;
    }

    if (type === 'checkbox') {
      options[name] = $this.prop('checked');
      cropBoxData = $myCanvas.cropper('getCropBoxData');
      canvasData = $myCanvas.cropper('getCanvasData');

      options.built = function () {
        $myCanvas.cropper('setCropBoxData', cropBoxData);
        $myCanvas.cropper('setCanvasData', canvasData);
      };
    } else if (type === 'radio') {
      options[name] = $this.val();
    }

    $myCanvas.cropper('destroy').cropper(options);
  });


  // Methods
  $('.docs-buttons').on('click', '[data-method]', function () {
    var $this = $(this);
    var data = $this.data();
    var $target;
    var result;

    if ($this.prop('disabled') || $this.hasClass('disabled')) {
      return;
    }

    if ($myCanvas.data('cropper') && data.method) {
      data = $.extend({}, data); // Clone a new one

      if (typeof data.target !== 'undefined') {
        $target = $(data.target);

        if (typeof data.option === 'undefined') {
          try {
            data.option = JSON.parse($target.val());
          } catch (e) {
            console.log(e.message);
          }
        }
      }

      if (data.method === 'rotate') {
        $myCanvas.cropper('clear');
      }

      result = $myCanvas.cropper(data.method, data.option, data.secondOption);   //选择拖拽模式 move: 移动图片 crop :移动截取框

      if (data.method === 'rotate') {
        $myCanvas.cropper('crop');
      }

      switch (data.method) {    //判断是哪种选项
        case 'scaleX':            
        case 'scaleY':                //旋转
          $(this).data('option', -data.option);
          break;

        case 'getCroppedCanvas':    //下载
          if (result) {

            // Bootstrap's Modal
            $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

            if (!$download.hasClass('disabled')) {
              $download.attr('href', result.toDataURL('image/png'));     //result.toDataUrl() 整个裁切图片的base64代码
            }
          }

          break;
      }

      if ($.isPlainObject(result) && $target) {   //判断是否为纯粹的对象
        try {
          $target.val(JSON.stringify(result));
        } catch (e) {
          console.log(e.message);
        }
      }

    }
  });


  // Keyboard
  $(document.body).on('keydown', function (e) {

    if (!$myCanvas.data('cropper') || this.scrollTop > 300) {
      return;
    }

    switch (e.which) {
      case 37:
        e.preventDefault();
        $myCanvas.cropper('move', -1, 0);
        break;

      case 38:
        e.preventDefault();
        $myCanvas.cropper('move', 0, -1);
        break;

      case 39:
        e.preventDefault();
        $myCanvas.cropper('move', 1, 0);
        break;

      case 40:
        e.preventDefault();
        $myCanvas.cropper('move', 0, 1);
        break;
    }

  });


  // Import image  载入图片
  var $inputImage = $('#inputImage');
  var URL = window.URL || window.webkitURL;
  var blobURL;

  if (URL) {
    $inputImage.change(function () {
      var files = this.files;
      var file;

      if (!$myCanvas.data('cropper')) {
        return;
      }

      if (files && files.length) {
        file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
          blobURL = URL.createObjectURL(file);
          $myCanvas.one('built.cropper', function () {

            // Revoke when load complete
            URL.revokeObjectURL(blobURL);
          }).cropper('reset').cropper('replace', blobURL);
          $inputImage.val('');
        } else {
          window.alert('Please choose an image file.');
        }
      }
    });
  } else {
    $inputImage.prop('disabled', true).parent().addClass('disabled');
  }

});
