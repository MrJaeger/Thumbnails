<html>
	<head>
		<title>Thumbnails Site</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<link rel="stylesheet" href="css/index.css" type="text/css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script src="http://malsup.github.com/jquery.form.js"></script> 
		<script src="./javascript/jquery.imgareaselect.min.js"></script>
		<script src="./javascript/thumbnails.js"></script>
	</head>
	<body>
		<h1>Thumbnails</h1>
		<ul id="thumbnail_list"></ul>
		<div id="uploaded"></div>
		<button id="thumbnail_upload_button">Save Thumbnail</button>
		<div id="thumbnail">
		</div>
		<form id="upload_form" action="upload.php" method="post">
			<label>Picture to Upload:</label>
			<input name="image_file" type="file" />
			<input type="submit" value="Upload" />
		</form>
	</body>
</html>