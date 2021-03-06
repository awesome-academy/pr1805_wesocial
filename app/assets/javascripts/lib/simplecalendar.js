var calendar = {
    init: function() {
        function t() {
            $(".remove").click(function() {
                if (this.checked) {
                    $(this).next().text("Remove from personal list");
                    var t = $(this).closest(".day").data("month"),
                        a = $(this).closest(".day").data("day"),
                        e = $(this).closest(".day").data("number");
                    $('.day[data-month="' + t + '"][data-day="' + a + '"][data-number="' + e + '"]').slideUp("slow"), $('.day-event[data-month="' + t + '"][data-day="' + a + '"][data-number="' + e + '"]').find(".save").data("checked", !1), $('.day-event[data-month="' + t + '"][data-day="' + a + '"][data-number="' + e + '"]').find("span").text("Save to personal list"), setTimeout(function() {
                        $('.day[data-month="' + t + '"][data-day="' + a + '"][data-number="' + e + '"]').remove()
                    }, 1500)
                }
            })
        }

        function a() {
            var t = $(".person-list");
            t.find(".day").sort(function(t, a) {
                return +t.getAttribute("day") - +a.getAttribute("day")
            }).appendTo(t)
        }
        var e = new Date,
            d = (e.getFullYear(), e.getMonth(), e.getDate(), e.getMonth() + 1);
        $(".month").text(function(t) {
            return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t - 1]
        }(d)), $('tbody td[data-day="' + e.getDate() + '"]').addClass("current-day"), $("tbody td").on("click", function(t) {
            $(this).hasClass("event") ? ($("tbody td").removeClass("active"), $(this).addClass("active")) : $("tbody td").removeClass("active")
        }), $(".day-event").each(function(t) {
            var a = $(this).data("month"),
                e = $(this).data("day");
            $('tbody tr td[data-month="' + a + '"][data-day="' + e + '"]').addClass("event")
        }), $("tbody td").on("click", function(t) {
            $(".day-event").slideUp("fast");
            var a = $(this).data("month"),
                e = $(this).text();
            $('.day-event[data-month="' + a + '"][data-day="' + e + '"]').slideDown("fast")
        }), $(".close").on("click", function(t) {
            $(this).parent().slideUp("fast")
        }), $(".save").click(function() {
            if (this.checked) {
                $(this).next().text("Remove from personal list");
                var e = $(this).closest(".day-event").html(),
                    d = $(this).closest(".day-event").data("month"),
                    n = $(this).closest(".day-event").data("day"),
                    s = $(this).closest(".day-event").data("number");
                $(".person-list").append('<div class="day" data-month="' + d + '" data-day="' + n + '" data-number="' + s + '" style="display:none;">' + e + "</div>"), $('.day[data-month="' + d + '"][data-day="' + n + '"]').slideDown("fast"), $(".day").find(".close").remove(), $(".day").find(".save").removeClass("save").addClass("remove"), $(".day").find(".remove").next().addClass("hidden-print"), t(), a()
            } else {
                $(this).next().text("Save to personal list");
                var d = $(this).closest(".day-event").data("month"),
                    n = $(this).closest(".day-event").data("day"),
                    s = $(this).closest(".day-event").data("number");
                $('.day[data-month="' + d + '"][data-day="' + n + '"][data-number="' + s + '"]').slideUp("slow"), setTimeout(function() {
                    $('.day[data-month="' + d + '"][data-day="' + n + '"][data-number="' + s + '"]').remove()
                }, 1500)
            }
        }), $(".print-btn").click(function() {
            window.print()
        })
    }
};
$(document).ready(function() {
    calendar.init()
});
