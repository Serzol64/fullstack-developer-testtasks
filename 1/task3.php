<?php
/*
    Класс User отвечает за управление автором статьи в базе данных
    @property integer $user_id Числовой уникальный ID автора, по которому выполняются пользовательские операции
*/
class User{

    public $user_id;

    /*
        Отвечает за получение метаданных о запрашиваемом авторе в массиве по критериям
        @return string Выводит данные результата поиска в JSON-формате(Имя и фамилия автора, возраст, специализация, город, ссылки на соцсети автора и т.п.)
    */
    function getUserMetaData(){

    }
    /*
        @return string Выводит список статей конкретного автора в JSON-формате
    */
    function getUserArticles(){

    }
    /*
        Процесс добавления статьи в БД от конкретного пользователя
        @return boolean Выводит TRUE, если статья добавлена успешно в БД
    */
    function newUserArticle($title,$content){

    }
}
/*
    Класс Article отвечает за управление данной статьей.
    - @property integer $article_id Числовой уникальный ID статьи, по которому выполняются операции по статье в базе данных.
*/
class Article{

    public $article_id;

    /*
        @return string Выводит имя автора статьи по его ID, найденному по ID конкретной статьи статьи
    */
    function getArticleAuthor(){

    }
    /*
        Процесс смены автора статьи
        @param integer $migrateUser_id ID, на который нужно сменить автора конкретной статьи
        @return boolean Выводит TRUE, если замена прошла успешно
    */
    function renameArticleAuthor($migrateUser_id){

    }
}
?>