<?php 
include "includes/connect.php";
include "includes/connect_prepare.php";
include "includes/connect_PDO.php";

if($_GET['section'] == 'personal_details')
{
        
    $sql_personal_details = "SELECT * FROM RESUME";
    $result_personal_details  = mysqli_query($conn, $sql_personal_details);
    $row_personal_details = mysqli_fetch_assoc($result_personal_details);

    $full_name = $row_personal_details['full_name']; 
    $job_title = $row_personal_details['job_title'];
    $email = $row_personal_details['email'];
    $phone = $row_personal_details['phone'];
    $address = $row_personal_details['address'];
    $nationality = $row_personal_details['nationality'];
    $passport = $row_personal_details['passport'];
    $marital_status = $row_personal_details['marital_status'];
    $military_service = $row_personal_details['military_service'];
    $driving_license = $row_personal_details['driving_license'];
    $gender = $row_personal_details['gender']; 

    /* $result_personal_details  = $conn_prepare->prepare($sql_personal_details);
    $result_personal_details->execute(); */

    //"HTML ID" => $
    $arr_personal_details = 
    [ 
        "name" => $full_name, 
        "job_title" => $job_title, 
        "email" => $email, $phone, 
        "address" => $address, 
        "nationality" => $nationality, 
        "passport" => $passport, 
        "marital_status" => $marital_status, 
        "military_service" => $military_service, 
        "driving_license" => $driving_license, 
        "gender" => $gender
    ];

    //var_dump($arr_personal_details);
    $json_personal_details = json_encode($arr_personal_details);
    echo $json_personal_details;

}

if($_GET['section'] == "languages")
{
    $sql_languages = "SELECT * FROM languages";
    $result_languages = mysqli_query($conn, $sql_languages);
    $row_languages = mysqli_fetch_assoc($result_languages);

    $language_name = $row_languages['language_name'];
    $language_additional_info = $row_languages['additional_info'];
    $language_level = $row_languages['language_level'];
    
    //"HTML ID" => $
    $arr_languages = [
        "language_name" => $language_name,
        "additional_info" => $language_additional_info,
        "language_level" => $language_level
    ];

    $json_languages = json_encode($arr_languages);
    echo $json_languages;

}

if($_GET['section'] == "awards")
{
    $sql_awards = "SELECT * FROM awards";
    $result_awards = mysqli_query($conn, $sql_awards);
    $row_awards = mysqli_fetch_Assoc($result_awards);

    $award_name = $row_awards['award_name'];
    $award_issuer = $row_awards['award_issuer'];
    $award_date = $row_awards['award_date'];
    $award_description = $row_awards['award_description'];

    //"HTML ID" => $
    $arr_awards = [
        "award" => $award_name,
        "issuer" => $award_issuer,
        //"date" => $award_date,
        "award_description" => $award_description
    ];

    $json_awards = json_encode($arr_awards);
    echo $json_awards;
}

if($_GET['section'] == "courses")
{
    $sql_courses = "SELECT * FROM courses";
    $result_courses = mysqli_query($conn, $sql_courses);
    $row_courses = mysqli_fetch_assoc($result_courses);

    $course_title = $row_courses['course_title'];
    $course_institution = $row_courses['course_institution'];
    $course_city = $row_courses['course_city'];
    $course_country = $row_courses['course_country'];
    $course_sd = $row_courses['course_start_date'];
    $course_ed = $row_courses['course_end_date'];
    $course_description = $row_courses['course_description'];

    //"HTML ID" => $
    $arr_courses = [
        "course_title" => $course_title,
        "course_institution" => $course_institution,
        "course_city" => $course_city,
        "course_country" => $course_country,
        "course_start_date" => $course_sd,
        "course_end_date" => $course_sd,
        "course_description" => $course_description
    ];

    $json_courses = json_encode($arr_courses);
    echo $json_courses;
}

if($_GET['section'] == "publications")
{
    $sql_publications = "SELECT * FROM publications";
    $result_publications = mysqli_query($conn, $sql_publications);
    $row_publications = mysqli_fetch_assoc($result_publications);

    $publication_title = $row_publications['publication_title'];
    $publication_publisher = $row_publications['publication_publisher'];
    $publication_date = $row_publications['publication_date'];
    $publication_description = $row_publications['publication_description'];

    //"HTML ID" => $
    $arr_publication = [
        "publication_title" => $publication_title,
        "publisher" => $publication_publisher,
        //"publication_date" => $publication_date,
        "publication_description" => $publication_description
    ];

    $json_publications = json_encode($arr_publication);
    echo $json_publications;
}

if($_GET['section'] == "profile")
{
    $sql_profile = "SELECT profile FROM resume";
    $result_profile = mysqli_query($conn, $sql_profile);
    $row_profile = mysqli_fetch_assoc($result_profile);

    $profile_description = $row_profile['profile'];
    
    //"HTML ID" => $
    $arr_profile = [
        "profile_description" => $profile_description
    ];

    $json_profile = json_encode($arr_profile);
    echo $json_profile;
}

if($_GET['section'] == 'references')
{
    $sql_reference = "SELECT * FROM reference";
    $result_reference = mysqli_query($conn, $sql_reference);
    $row_reference = mysqli_fetch_assoc($result_reference);

    $reference_name = $row_reference['reference_name'];
    $reference_job_title = $row_reference['reference_job_title'];
    $reference_organization = $row_reference['reference_organization'];
    $reference_email = $row_reference['reference_email'];
    $reference_phone = $row_reference['reference_phone'];

    
    //"HTML ID" => $
    $arr_reference = [
        "reference_name" => $reference_name,
        "reference_job_title" => $reference_job_title,
        "reference_organization" => $reference_organization,
        "reference_email" => $reference_email,
        "reference_phone" => $reference_phone
    ];

    $json_reference = json_encode($arr_reference);
    echo $json_reference;
}

if($_GET['section'] == "organization")
{
    $sql_organization = "SELECT * FROM organization";
    $result_organization = mysqli_query($conn, $sql_organization);
    $row_organization = mysqli_fetch_assoc($result_organization);

    $organization_name = $row_organization['organization_name'];
    $organization_position = $row_organization['organization_position'];
    $organization_city = $row_organization['organization_city'];
    $organization_country = $row_organization['organization_country'];
    $organization_description = $row_organization['organization_description'];

    //"HTML ID" => $
    $arr_organization = [
        "organization_name" => $organization_name,
        "organization_position" => $organization_position,
        "organization_city" => $organization_city,
        "organization_country" => $organization_country,
        "organization_description" => $organization_description
    ];

    $json_organization = json_encode($arr_organization);
    echo $json_organization;
}

if($_GET['section'] == "skills")
{
    $sql_skill = "SELECT * FROM skills";
    $result_skill = mysqli_query($conn, $sql_skill);
    $row_skill = mysqli_fetch_assoc($result_skill);

    $skill_name = $row_skill['skill_name'];
    $sub_skills = $row_skill['sub_skills'];
    
    //"HTML ID" => $
    $arr_skill = [
        "skill_name" => $skill_name,
        "sub_skills" => $sub_skills
    ];

    $json_skill = json_encode($arr_skill);
    echo $json_skill;
}

if($_GET['section'] == "education")
{
    $sql_education = "SELECT * FROM education";
    $result_education = mysqli_query($conn, $sql_education);
    $row_education = mysqli_fetch_assoc($result_education);

    //"HTML ID" => $
    $degree = $row_education['education_degree'];
    $school = $row_education['school'];
    $education_city = $row_education['education_city'];
    $educaiton_country = $row_education['education_country'];
    $education_description = $row_education['education_description'];

    $arr_education = [
        "degree" => $degree,
        "school" => $school,
        "education_city" => $education_city,
        "education_description" => $education_description
    ];

    $json_education = json_encode($arr_education);
    echo $json_education;
}

if($_GET['section'] == "projects")
{
    $sql_project = "SELECT * FROM projects";
    $result_project = mysqli_query($conn, $sql_project);
    $row_project = mysqli_fetch_assoc($result_project);

    $project_title = $row_project['project_title'];
    $sub_title = $row_project['sub_title'];
    $project_description = $row_project['project_description'];

    $arr_project = [
        "project_title" => $project_title,
        "project_sub_title" => $sub_title,
        "project_description" => $project_description
    ];

    $json_project = json_encode($arr_project);
    echo $json_project;
}

?>