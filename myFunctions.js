$(document).ready(function() {
    // دالة لإظهار/إخفاء تفاصيل التطبيق
    $('.toggle-details').click(function() {
        var appId = $(this).data('app');
        var detailsRow = $('#details-' + appId);
        
        if (detailsRow.is(':visible')) {
            detailsRow.hide();
            $(this).text('إظهار التفاصيل');
        } else {
            detailsRow.show();
            $(this).text('إخفاء التفاصيل');
        }
    });

    // تحميل التطبيقات من localStorage إذا وجدت
    loadAppsFromLocalStorage();
});

// دالة لتحميل التطبيقات من localStorage
function loadAppsFromLocalStorage() {
    var savedApps = localStorage.getItem('aiApps');
    if (savedApps) {
        var apps = JSON.parse(savedApps);
        var tableBody = $('#appsTable tbody');
        
        apps.forEach(function(app, index) {
            var appId = 6 + index;
            
            var mainRow = `
                <tr>
                    <td>${app.name}</td>
                    <td>${app.company}</td>
                    <td>${app.field}</td>
                    <td>${app.isFree ? 'نعم' : 'لا'}</td>
                    <td>
                        <button class="toggle-details" data-app="${appId}">إظهار التفاصيل</button>
                    </td>
                </tr>
            `;
            
            var detailsRow = `
                <tr class="app-details" id="details-${appId}" style="display: none;">
                    <td colspan="5">
                        <div class="details-content">
                            <div class="basic-info">
                                <div class="website-info">
                                    <strong>للوصول إلى الموقع الإلكتروني:</strong>
                                    <p>${app.website}</p>
                                </div>
                                <div class="description-info">
                                    <strong>شرح مختصر:</strong>
                                    <p>${app.description}</p>
                                </div>
                            </div>
                            <div class="media-row">
                                <div class="audio-section">
                                    <strong>شرح صوتي:</strong>
                                    <audio controls>
                                        <source src="./${app.name.toLowerCase()}-explanation.mp3" type="audio/mpeg">
                                    </audio>
                                </div>
                                <div class="logo-section">
                                    <strong>صورة الشعار:</strong>
                                    <img src="./${app.name.toLowerCase()}-logo.jpg" alt="${app.name} Logo" class="app-logo">
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
            
            tableBody.append(mainRow + detailsRow);
        });

        // إعادة ربط الأحداث للأزرار الجديدة
        $('.toggle-details').off('click').click(function() {
            var appId = $(this).data('app');
            var detailsRow = $('#details-' + appId);
            
            if (detailsRow.is(':visible')) {
                detailsRow.hide();
                $(this).text('إظهار التفاصيل');
            } else {
                detailsRow.show();
                $(this).text('إخفاء التفاصيل');
            }
        });
    }
}

// دالة لإضافة تطبيق جديد
function addNewApp(appData) {
    var savedApps = localStorage.getItem('aiApps');
    var apps = savedApps ? JSON.parse(savedApps) : [];
    
    apps.push(appData);
    localStorage.setItem('aiApps', JSON.stringify(apps));
    
    window.location.href = 'apps.html';
}

$(document).ready(function() {
    // دالة أساسية لإظهار/إخفاء التفاصيل
    $(document).on('click', '.toggle-details', function() {
        var appId = $(this).data('app');
        var detailsRow = $('#details-' + appId);
        
        if (detailsRow.is(':visible')) {
            detailsRow.hide();
            $(this).text('إظهار التفاصيل');
        } else {
            detailsRow.show();
            $(this).text('إخفاء التفاصيل');
        }
    });
});