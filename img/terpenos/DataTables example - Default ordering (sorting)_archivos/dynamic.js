window._site.forumUser = "";
$(document).ready( function () {
	window._site.comments( $('div.content div.comments'), [{"id":"1634","username":"kdpowell","comment":"<p>Columns are ordered using <em>0<\/em> as first column on left. In a five column table the columns are numbered for sorting purposes like this: 0,1,2,3,4,5,6.<\/p>\n\n<p>Lets say you want to sort the fourth column (3) descending and the first column (0) ascending: your <code>order:<\/code> would look like this: <code>order: [[ 3, 'desc' ], [ 0, 'asc' ]]<\/code><\/p>\n\n<pre><code class=\"multiline language-js\">$(document).ready(function() {\n    $('#example').DataTable( {\n        order: [[ 3, 'desc' ], [ 0, 'asc' ]]\n    } );\n} );\n<\/code><\/pre>\n","created":"10:08, Wed 10th Feb 2016","parent":null,"version":"1.10.10","children":[]}] );
} );window._site.page = "examples\/basic_init\/table_sorting.html";

$(document).ready( function () {
	window._site.dynamicLoaded();
} );
