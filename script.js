function orderNow() {
  const message = encodeURIComponent(
    "Hello,\nI would like to place an order.\n\nItem:\nQuantity:\nPickup Time:"
  );
  const phone = "8814884587";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
