<?php
  // go to this file in the path below
  // and include the contents into this file
  //include('./templates/header.php');
  require('./templates/includeMyVariable.php');
  require_once('./templates/header.php');
  // also include_once()

  // if you NEED to use require_once or include_once
  // in your own code, it is usually a sign that your code
  // should be restructured

  // include = I want to include this file. It doesn't exist? I'll just 
  // give you a warning
  // require = I REQUIRE this file. If it doesn't exist, then I error out because
  // the file is REQUIRED
?>
   
	Page 1
    <p><a href="page2.php">Page 2</a></p>
    <p>
        <?php
            echo $testMe;
        ?>
    </p>

    <form action="submitted.php" method="POST" id="myForm">
        <input type="text" id="name" name="name" value="Travis" />
        <input type="submit" id="submitButton" />
    </form>
    <script type="text/javascript">
        // get an element with the ID of "submitButton"
        let mySubmitButton = document.querySelector('#submitButton');
        // add an event listener, listening for the "click" event
        mySubmitButton.addEventListener('click', function(e) {
            e.preventDefault(); // stop the submit button from doing anything
            fetch('submitted.php',
            {
                method: "POST",
                body: new FormData(document.querySelector('#myForm'))
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
        });
    </script>
<?php
  include('./templates/footer.php');
?>