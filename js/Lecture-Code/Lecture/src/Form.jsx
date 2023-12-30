function handleFormSubmit(evt) {
  // to stop the default action of refreshing the page
  evt.preventDefault();
  console.log("Form Submitted!!");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="submit" />
    </form>
  );
}
