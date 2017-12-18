<?php
// 该类的一个对象代表admin表的一条记录
    class Admin{
        private $id;
        private $name;
        private $password;
         /**
         * @return $id
         */
        public function getId()
        {
            return $this->id;
        }
    
        /**
         * @return $name
         */
        public function getName()
        {
            return $this->name;
        }
    
        /**
         * @return $password
         */
        public function getPassword()
        {
            return $this->password;
        }
    
        /**
         * @param !CodeTemplates.settercomment.paramtagcontent!
         */
        public function setId($id)
        {
            $this->id = $id;
        }
    
        /**
         * @param !CodeTemplates.settercomment.paramtagcontent!
         */
        public function setName($name)
        {
            $this->name = $name;
        }
    
        /**
         * @param !CodeTemplates.settercomment.paramtagcontent!
         */
        public function setPassword($password)
        {
            $this->password = $password;
        }
    
    }
    



?>