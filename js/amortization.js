function calculate() {
    var mortgage = document.getElementById("mortgage").value;
    var term = document.getElementById("term").value * 12;
    var rate = document.getElementById("rate").value / 12;
    var monthly = mortgage * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1)
    document.write("Month&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("Payment&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("Principal&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("Interest&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("Balance<br>");
    for (var i = term; i > 0; i--) {
        var principal = monthly - (mortgage * rate);
        var interest = mortgage * rate;
        mortgage -= principal;
        document.write(i + "&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(monthly.toFixed(2) + "&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(principal.toFixed(2) + "&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(interest.toFixed(2) + "&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(mortgage.toFixed(2) + "&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write("<br>");
    }
}
