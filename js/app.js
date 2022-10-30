$(document).ready(function (e) {
  var value_Element = $(".value");

  function increaseValue(e) {
    value_Element.text(
      Math.max(parseInt(value_Element.text()) + e.data.increase, 0)
    );
    return false;
  }
  $("#plus").bind(
    "click",
    {
      increase: 1,
    },
    increaseValue
  );
  $("#minus").bind(
    "click",
    {
      increase: -1,
    },
    increaseValue
  );
});
