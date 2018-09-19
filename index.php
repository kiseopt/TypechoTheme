<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; 
?>
<?php
if (stripos($this->request->getRequestUri(), 'json')) {
    $arr = array();
$this->widget('Widget_Contents_Post_Recent', 'pageSize=10000')->to($archives);
    while ($archives->next()) {
        $a = array('title' => $archives->title,
         'date' => $archives->date->format('Y-m-d'),
          'content' => $archives->content, 
          'permalink' => $archives->permalink,
          'author' =>$archives->author->name,
          'authorMail'=>$archives->author->mail,
          'category'=>$archives->category,
          'authorurl'=>$archives->author->url,);
        $arr[] = $a;
    }
    $this->response->throwJson(array("title" => $this->options->title, "description" =>  $this->options->description, "message" => $arr));
    
}
?>
