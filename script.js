function orderNow() {
  const message = encodeURIComponent(
    "Hello,\nI would like to place an order.\n\nItem:\nQuantity:\nPickup Time:"
  );
  const phone = "+91 XX148845XX";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

