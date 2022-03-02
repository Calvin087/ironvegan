window.onload = () => {
  const toastNode = document.getElementById('toast');

  if (toastNode) {
    const toast = new bootstrap.Toast(toastNode);
    toast.show()
  }
}