<?php
// 该类的一个对象代表admin表的记录
    /**
     * @author Administrator
     *
     */
    class Emp{
        private $id;
        private $name;
        private $grade;
        private $email;
        private $salary;
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
         * @return $grade
         */
        public function getGrade()
        {
            return $this->grade;
        }
    
        /**
         * @return $email
         */
        public function getEmail()
        {
            return $this->email;
        }
    
        /**
         * @return $salary
         */
        public function getSalary()
        {
            return $this->salary;
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
        public function setGrade($grade)
        {
            $this->grade = $grade;
        }
    
        /**
         * @param !CodeTemplates.settercomment.paramtagcontent!
         */
        public function setEmail($email)
        {
            $this->email = $email;
        }
    
        /**
         * @param !CodeTemplates.settercomment.paramtagcontent!
         */
        public function setSalary($salary)
        {
            $this->salary = $salary;
        }
    
    }



?>