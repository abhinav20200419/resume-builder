<?php
include 'includes/connect.php';
/* 
echo "<script>resume_template_id</script>";
echo "<script>getVariable()</script>"; */

// echo $template_id = $_GET['t_id'];
if(isset($_GET['id'])){
 $template_id = $_GET['id'];
 echo $template_id;
 
}

$resume_id = 1;
$user_id = 1;
//echo "<script>alert(".$template_id.")</script>";

if(isset($_POST['personal_details_save']))
{
    

    $personal_details = $_POST['personal_details'];
    $full_name = $personal_details[0];
    $job_title = $personal_details[1];
    $email = $personal_details[2];
    $phone = $personal_details[3];
    $address = $personal_details[4];
    $nationality = $personal_details[5];
    $passport = $personal_details[6];
    $marital_status = $personal_details[7];
    $military_service = $personal_details[8];
    $driving_license = $personal_details[9];
    $gender = $personal_details[10];

    $dob = $personal_details[11];


    // template_id, name_resume, full_name, job_title, email, phone, address, nationality, passport, marital status, military_Service, driving_license, gender, dob
    $check_sql_personal_details = "SELECT * FROM resume WHERE user_id = '$user_id' ";
    $result_check_personal_details = mysqli_query($conn, $check_sql_personal_details);

    if(mysqli_num_rows($result_check_personal_details) > 0)
    {
        $sql_personal_details = "UPDATE resume SET full_name = '$full_name', job_title = '$job_title', email = '$email', phone = '$phone', address = '$address', nationality = '$nattionality', passport = '$passport', marital_status = '$marital_status', military_Service = '$marital_status', driving_license = '$driving_license', gender = '$gender', dob = '$dob'";
        $result_personal_details = mysqli_query($conn,$sql_personal_details);

    }
    else
    {
        $sql_personal_details = "INSERT INTO resume (user_id, template_id,  name_resume, full_name, job_title, email, phone, address, nationality, passport, marital_status, military_service, driving_license, gender, dob) VALUES (1, 1,'resume1', '$full_name', '$job_title', '$email', '$phone', '$address', '$nationality', '$passport', '$marital_status', '$military_service', '$driving_license', '$gender', '$dob')";
        $result_personal_details = mysqli_query($conn ,$sql_personal_details);
        if($result_personal_details)
        {
        }
    }


    echo "\n";
    var_dump($name_resume);
    echo "\n";
    echo $name_resume[0];
}

if(isset($_POST['languages_save']))
{
    $language = $_POST['languages'];
    $language_name = $language[0];
    $language_addn_info = $language[1];
    $language_level = $language[2];    


    $check_sql_language = "SELECT * FROM languages WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    
    $check_result_language = mysqli_query($conn, $check_sql_language);
    if(mysqli_num_rows($check_result_language) > 0)
    {
        $sql_language = "UPDATE languages SET language_name = '$language_name', additional_info = '$language_addn_info', language_level = '$language_level'";
        $result_language = mysqli_query($conn, $sql_language);
    }
    else
    {
        $sql_languages = "INSERT INTO languages (resume_id, user_id, language_name, additional_info, language_level) VALUES(1,1,'$language_name', '$language_addn_info','$language_level')";
        $result_language = mysqli_query($conn,$sql_languages);
        
    }

}

if(isset($_POST['awards_save']))
{
    $award = $_POST['awards'];
    $award_name = $award[0];
    $award_issuer = $award[1];
    $award_date = $award[2];
    $award_description = $award[3];


    $check_sql_award = "SELECT * FROM awards WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    
    $check_result_award = mysqli_query($conn, $check_sql_award);
    if(mysqli_num_rows($check_result_award) > 0)
    {
        $sql_award = "UPDATE awards SET award_name = '$award_name', award_issuer = '$award_issuer', award_date = '$award_date', award_description = '$award_description'";
        $result_award = mysqli_query($conn, $sql_award);
    }
    else
    {
   
        $sql_award = "INSERT INTO awards (resume_id, user_id, award_name, award_issuer, award_date, award_description) VALUES (1,1,'$award_name','$award_issuer', '$award_date', '$award_description')";
        $result_award = mysqli_query($conn, $sql_award);
        
    }

}

if(isset($_POST['courses_save']))
{
    $course = $_POST['courses'];
    $course_title = $course[0];
    $course_institution = $course[1];
    $course_city = $course[2];
    $course_country = $course[3];
    $course_sd = $course[4];
    $course_ed = $course[5];
    $course_description = $course[6];

    $check_sql_course = "SELECT * FROM courses WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    
    $check_result_course = mysqli_query($conn, $check_sql_course);
    if(mysqli_num_rows($check_result_course) > 0)
    {
        $sql_course = "UPDATE courses SET course_title = '$course_title', course_institution = '$course_institution', course_city = '$course_city', course_country = '$course_country', course_start_date = '$course_sd', course_end_date = '$course_ed' , course_description = '$course_description'";
        $result_course = mysqli_query($conn, $sql_course);
    }
    else
    {
        $sql_course = "INSERT INTO courses (resume_id, user_id, course_title, course_institution, course_city, course_country, course_start_date, course_end_Date, course_description) VALUES(1,1,'$course_title','$course_institution', '$course_city', '$course_country', '$course_sd', '$course_ed', '$course_description')";
        $result_course = mysqli_query($conn, $sql_course);
        
    }

}

if(isset($_POST['publications_save']))
{
    $publication = $_POST['publications'];
    $publication_title = $publication[0];
    $publication_publisher = $publication[1];
    $publication_date = $publication[2];
    $publication_description = $publication[3];

    $check_sql_publication = "SELECT * FROM publications WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    
    $check_result_publication = mysqli_query($conn, $check_sql_publication);
    if(mysqli_num_rows($check_result_publication) > 0)
    {
        $sql_publication = "UPDATE publications SET publication_title = '$publication_title', publication_publisher = '$publication_publisher', publication_date ='$publication_date', publication_description = '$publication_description'";
        $result_publication = mysqli_query($conn, $sql_publication);
    }
    else
    {
        $sql_publication = "INSERT INTO publications (resume_id, user_id, publication_title, publication_publisher, publication_date, publication_description) VALUES(1,1, '$publication_title', '$publication_publisher', '$publication_date', '$publication_description')";
        $result_publisher = mysqli_query($conn, $sql_publication);
    }

}

if(isset($_POST['skills_save']))
{
    $skill = $_POST['skills'];
    $skill_name = $skill[0];
    $skill_sub_skills = $skill[1];
    $skill_level = $skill[2];

    $check_sql_skill = "SELECT * FROM skills WHERE resume_id = '$resume_id' AND user_id = '$user_id'";
    $check_result_skill = mysqli_query($conn, $check_sql_skill);

    if(mysqli_num_rows($check_result_skill) > 0)
    {
        $sql_skill = "UPDATE skills SET skill_name = '$skill_name', sub_skills = '$skill_sub_skills', skill_level = '$skill_level'";
        $result_skill = mysqli_query($conn, $sql_skill);
    }
    else
    {

        $sql_skill = "INSERT INTO skills (resume_id, user_id, skill_name, sub_skills, skill_level) VALUES(1, 1, '$skill_name', '$skill_sub_skills', '$skill_level')";
        $result_skill = mysqli_query($conn, $sql_skill);
    }

}

if(isset($_POST['education_save']))
{
    $education = $_POST['education'];
    $degree = $education[0];
    $school = $education[1];
    $education_city = $education[2];
    $education_country = $education[3];
    $education_sd = $education[4];
    $education_ed = $education[5];
    $education_description = $education[6];

    $check_sql_education = "SELECT * FROM education WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    $check_result_education = mysqli_query($conn, $check_sql_education) or die(mysqli_error($conn));

    if(mysqli_num_rows($check_result_education) > 0)
    {
        $sql_education = "UPDATE education SET education_degree ='$degree', school ='$school', education_city = '$education_city', education_country ='$education_country', education_start_date ='$educaiton_sd', education_end_date ='$education_ed', education_description ='$education_description' WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
        $result_education = mysqli_query($conn, $sql_education) or die(mysqli_error($conn));
    }
    else
    {
        $sql_education = "INSERT INTO education (resume_id, user_id, education_degree, school, education_city, education_country, education_start_date, education_end_date, education_description) VALUES(1, 1, '$degree', '$school', '$education_city', '$education_country', '$education_sd', '$education_ed', '$education_description')";
        $result_education = mysqli_query($conn, $sql_education) or die(mysqli_error($conn));
    }
}

if(isset($_POST['projects_save']))
{
    $project = $_POST['projects'];
    $project_title = $project[0];
    $project_sub_title = $project[1];
    $project_sd = $project[2];
    $project_ed = $project[3];
    $project_description = $project[4];
    
    $check_sql_project = "SELECT * FROM projects WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    $check_result_project = mysqli_query($conn, $check_sql_project);

    if(mysqli_num_rows($check_result_project) > 0)
    {
        $sql_project = "UPDATE projects SET project_title = '$project_title', sub_title = '$project_sub_title', project_start_date = '$project_sd', project_end_date = '$project_ed', project_description = '$project_description'";
        $result_project = mysqli_query($conn, $sql_project);
    }
    else
    {
        $sql_project = "INSERT INTO projects (resume_id, user_id, project_title, sub_title, project_start_date, project_end_Date, project_description) VALUES(1, 1, '$project_title', '$project_sub_title', '$project_sd', '$project_ed', '$project_description')";
        $result_project = mysqli_query($conn, $sql_project);
    }
}

if(isset($_POST['profile_save']))
{
    $profile = $_POST['profile'];
    $profile_description = $profile[0];
    

    $check_sql_profile = "SELECT profile FROM resumme";
    $check_result_profile = mysqli_query($conn, $check_sql_profile);

    if(mysqli_num_rows($check_result_profile))
    {
        $sql_profile = "UPDATE resume SET profile = '$profile_description'";
        $result_project = mysqli_query($conn, $sql_profile);
    }
    else
    {
        $sql_profile = "INSERT INTO resume (profile) VALUES('$profile_description')";
        $result_profile = mysqli_query($conn, $sql_profile);
    }

    //update resume table column name is profile
    /* $profile = $_POST['$personal_details'];

    $sql_profile = ""; */
}

if(isset($_POST['references_save']))
{
    $reference = $_POST['references'];
    $reference_name = $reference[0];
    $reference_jobtitle =  $reference[1];
    $reference_organization = $references[2];
    $reference_email = $reference[3];
    $referece_phone = $reference[4];

    $check_sql_reference = "SELECT * FROM reference WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    
    $check_result_reference = mysqli_query($conn, $check_sql_reference);
    if(mysqli_num_rows($check_result_reference) > 0)
    {
        $sql_reference = "UPDATE reference SET reference_name = '$reference_name', reference_job_title = '$reference_jobtitle', reference_organization = '$reference_organization', reference_email = '$reference_email', reference_phone = '$reference_phone'";
        $result_reference = mysqli_query($conn, $sql_reference);
    }
    else
    {
        $sql_reference = "INSERT INTO reference (resume_id, user_id, reference_name, reference_job_title, reference_organization, reference_email, reference_phone) VALUES(1, 10
        
        , '$reference_name', '$reference_jobtitle', '$reference_organization', '$reference_email', '$reference_phone')";
        $result_sql = mysqli_query($conn, $sql_reference);
    }

}

if(isset($_POST['organization_save']))
{
    $organization = $_POST['organization'];
    $organization_name = $organization[0];
    $organization_position = $organization[1];
    $organization_city = $organization[2];
    $organization_country = $organization[3];
    $organization_sd = $organization[4];
    $organization_ed = $organization[5];
    $organization_description = $organization[6];

    $check_sql_organization = "SELECT * FROM organization WHERE user_id = '$user_id' AND resume_id = '$resume_id'";
    
    $check_result_organinzation = mysqli_query($conn, $check_sql_organization);
    if(mysqli_num_rows($check_result_organinzation) > 0)
    {
        $sql_organization = "UPDATE organization SET organization_name = '$organization_name', organization_position ='$organization_position', organization_city = '$organization_city', organization_country = '$organization_country', start_date = '$organization_sd', end_date = '$organization_ed', organization_description = '$organization_description'";
        $result_organization = mysqli_query($conn, $sql_organization);
    }
    else{
            
        $sql_organization = "INSERT INTO organization (resume_id, user_id, organization_name, organization_position, organization_city, organization_country, start_date, organization_end_date, description) VALUES('$resume_id', '$user_id, '$organization_name', '$organization_position', '$organization_city',  '$organization_country', '$organization_sd', '$organization_ed', '$organization_description')" or die(mysqli_error($conn));
        $result_organization = mysqli_query($conn, $sql_organization);
    }



}

?>


<?php
    header('location:resume.html');
?>

</body>
</html>
