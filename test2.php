<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- <script src="https://cdn.tailwindcss.com"></script> -->
    <title>Two Equal Vertical Sections</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="bg-gray-200">

    <div class="container-fluid h-100">
        <div class="row h-100">

            <style>
                /* Style for the left part */
                .left-part {
                    flex: 1;
                    /* Take up remaining space */
                    overflow-y: auto;
                    /* Enable vertical scrolling */
                    border-right: 1px solid #ccc;
                    /* Optional: Add a border between parts */
                    scrollbar-width: thin;
                    /* Firefox */
                    scrollbar-color: transparent transparent;
                    /* Firefox */
                }

                /* Style for the right part */
                .right-part {
                    flex: 1;
                    /* Take up remaining space */
                    overflow-y: auto;
                    /* Enable vertical scrolling */
                    scrollbar-width: thin;
                    /* Firefox */
                    scrollbar-color: transparent transparent;
                    /* Firefox */
                }
            </style>

            <!-- Left Section -->
            <div class="col-md-6">
                <div class="m-4 py-2 px-0  rounded-lg">
                    <div class="row">
                        <div class=" col-md-3 bg-light rounded-lg mr-12 h-1/3  col-md-3 sticky top-10 " style="width:150px;" ;>
                            <div class="">
                                <div class="">
                                    <ul class="unordered-list align-content-center">
                                        <li class="p-4 text-dark text-xl fw-bold">
                                            <img src="logo.png" class="max-h-16 max-w-16" alt="logo">
                                        </li>
                                        <li class="p-4 text-dark  text-xl fw-bold ">
                                            <i class="fa-solid fa-file-lines fa-2x mb-1 mx-4"></i>
                                            <br>Content
                                        </li>
                                        <li class="p-4 text-dark text-xl fw-bold">
                                            <i class="fa-solid fa-square-pen fa-2x mb-1 mx-4"></i>
                                            <br>Customize
                                        </li>
                                        <li class="p-4 text-dark text-xl fw-bold">
                                            <i class="fa-solid fa-link  fa-2x mb-1 mx-3"></i>
                                            <br><span class="">Links</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-8 bg-gray-200">
                            <div class="h-20 bg-gray-200 max-w-md    fixed top-0">
                                <div class="mt-10 bg-light p-2 mr-4 py-4  rounded-lg" style="width:450px; height:80px;">
                                    <span class="fw-bold text-4xl mx-6 mt-6" style="padding-top:50px;">Resume No. 1 </span><!-- will be updated through php -->
                                    <button class="btn btn-dark px-2">Download</button>
                                </div>
                            </div>
                            <div class=" mt-24  bg-pink-500    overflow-y-auto rounded-lg hideScroll " style="height:500px;">
                                <div class="container p-2 max-h-24">
                                    <!-- ACCORDION START -->
                                    <style>
                                        .hideScroll::-webkit-scrollbar {
                                            display: none;
                                        }
                                    </style>











                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style>
                .resume {
                    padding-top: 20px;
                    min-height: 600px;
                    max-height: 600px;
                    max-width: 700px;
                    padding: 40px;
                    margin-right: 10px;
                    overflow-x: hidden
                }
            </style>
            <!-- Right Section -->
            <div class="col-md-6  ">
                <div class="   bg-info rounded-lg">
                    <div class="relative">

                        <div class="col-md-11 bg-light ml-4 h-full resume fixed top-10 rounded-lg hideScroll  ">
                            <div class="overflow-y-auto ">
                                <div class="container">
                                    <div class="row" id="resume_personal_details">

                                    </div>
                                </div>




                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ACCORDION END -->



                                <br><br>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus dicta minus illo earum commodi tempore vero corrupti eaque veritatis ab non aliquid, ipsum, amet expedita, quam quo! Omnis iusto quasi eveniet dolorem magni consequatur optio voluptates, expedita quis quidem. Explicabo corporis culpa exercitationem ratione, minima quaerat temporibus, ducimus veniam dolore nisi voluptates? Dolor nostrum vitae totam nihil! Dicta asperiores, fugiat impedit tempora magnam consequatur eligendi distinctio, cupiditate vel aspernatur voluptatum, nulla nostrum natus quae? Et vitae quod quidem quo totam natus, impedit odit exercitationem pariatur adipisci tenetur ducimus est modi sit eius mollitia corporis accusamus numquam odio enim omnis iste! Excepturi non officiis quod asperiores deleniti nobis ducimus vel! Eos incidunt laboriosam quos hic minus quo ipsum impedit. Labore architecto, non nulla, magni impedit ex reiciendis explicabo earum accusamus saepe cum tenetur neque perspiciatis obcaecati qui vitae voluptatibus et dignissimos. Aliquid numquam eligendi soluta perferendis explicabo deleniti ducimus consectetur cupiditate quidem esse unde ratione possimus, distinctio corrupti atque nemo ex reiciendis accusamus, optio consequuntur voluptate accusantium. Impedit, minus ipsum aspernatur odio facilis, quis, id error excepturi magnam vitae aliquid nam pariatur rem veritatis ipsam fugit quas temporibus quo. Cum sunt, debitis ipsam maiores illo expedita repudiandae obcaecati nulla doloremque ipsa nemo dolore eaque dolorum? Asperiores necessitatibus dolorem iste distinctio, maxime laboriosam obcaecati et eveniet quod velit ea reiciendis. Aliquam illum ducimus sapiente aperiam delectus vero et atque placeat, deserunt, maxime praesentium ipsum soluta nobis velit. Dolorem quos deserunt numquam expedita omnis nihil quidem, consectetur nisi aliquam ab ratione libero tempora minima natus totam rem fuga corporis? Vitae ipsam aliquid amet nulla quis veritatis in deserunt placeat consectetur est voluptates libero culpa consequuntur vero obcaecati, quo ducimus, eaque unde quod repellendus error velit? Itaque, ab. Aspernatur distinctio consequatur perferendis consectetur doloremque nisi, laboriosam facilis ratione maxime consequuntur ipsum ipsam impedit ea fugiat modi neque odio cupiditate tempore porro alias iure repellendus ex beatae. Voluptatum sequi aut id quam deleniti voluptates libero, fugit nemo animi aperiam, sint facere modi ducimus, quidem vel perferendis nam? Alias laborum sequi consectetur officiis animi nisi eligendi, iste maiores asperiores optio reprehenderit totam qui, quis natus similique vel repudiandae explicabo. Rerum, deserunt! Deserunt sunt iste perspiciatis similique facere voluptate nobis dicta, aliquid ducimus ipsum dolorem voluptas repellendus nostrum optio excepturi quo sapiente harum. Voluptatem dolores quod illum nesciunt numquam optio itaque commodi aspernatur, adipisci, impedit ratione fuga cumque sequi necessitatibus, soluta quasi eius maxime id ex vero minima mollitia odit? Quidem quisquam, molestiae officiis vel quos et velit necessitatibus, enim magni deserunt eum perferendis illo ducimus vero. Veniam incidunt facilis, perferendis esse quaerat voluptate illum, ipsum nemo quis dolor rem a placeat atque ab inventore sint non error dicta ea explicabo. Repellendus ab esse libero eius perferendis architecto, quidem amet maiores nam, tempora ad. Praesentium, corporis quo dicta nobis eos ex eum dolorum est sequi hic ea explicabo accusantium consectetur saepe placeat officiis laudantium iste necessitatibus provident, illum tenetur repellat magnam. Saepe amet labore vel provident aliquid! Dolores tenetur doloribus distinctio quas perferendis ad alias, nulla harum, architecto totam fuga optio laboriosam maxime. Fugiat distinctio voluptatum neque, iusto voluptates, deleniti assumenda ipsum nobis tenetur saepe aspernatur nemo aperiam cumque ducimus eum. Eius laudantium neque soluta nam, in corrupti fugiat id vel temporibus est nisi a asperiores atque itaque nesciunt distinctio consequatur omnis fugit alias sunt quidem? Sint voluptatibus sunt saepe nihil fuga enim eos nostrum, perferendis pariatur earum maiores, sequi similique labore odio reprehenderit voluptate hic totam, itaque ducimus cum deserunt harum velit debitis amet. Debitis qui vitae quas ea odit vero corrupti nihil dolores aliquam. Et, dicta repellat at unde neque ratione vel sapiente? Tempora suscipit adipisci, repellendus molestias culpa dolorum exercitationem sapiente mollitia. Perferendis maiores facilis temporibus doloribus nam? Sint officiis rerum atque numquam inventore quae tempore eaque enim veniam molestias? Suscipit totam labore corporis autem, cupiditate, sint molestias non reprehenderit sequi dolorem facere eius fugit molestiae consequuntur, et unde perferendis dolor libero voluptatibus magni voluptates optio quod sed. Recusandae, excepturi deleniti odio veritatis delectus earum nesciunt soluta? Corporis dolore ex odit pariatur ea laudantium, officia nulla veniam natus in molestias, laborum explicabo et iusto unde! Saepe, est perspiciatis eum accusamus corrupti sequi asperiores ex quis unde similique natus in explicabo quas sit possimus perferendis dicta quisquam! Quam nemo rerum hic sunt quisquam, culpa error, aperiam distinctio ad molestias minus dolores voluptate nostrum iusto totam obcaecati eos voluptates. Alias cupiditate aliquam ipsum ab rem est quaerat debitis voluptas minus sint facere doloremque neque autem commodi, tenetur explicabo optio eum ratione iure ipsam inventore ea placeat, sit nobis. Sapiente, adipisci culpa! Soluta repellat commodi reprehenderit, molestias praesentium quas. Corrupti incidunt dolor delectus reprehenderit cum, numquam id nesciunt consequatur mollitia deleniti earum aspernatur enim maxime consequuntur nulla voluptatum animi impedit! Consequatur ad reiciendis commodi non cumque in, reprehenderit ea, facere tenetur voluptate aspernatur nihil ullam ipsum fuga. Ut architecto expedita voluptatibus repellat, nobis porro. Et labore molestias, eum quia unde sed, laborum quaerat dolorem, corrupti quasi debitis quisquam odio voluptatem ut sunt perspiciatis illo at ex. Quod, laudantium tenetur. Odio perferendis aut rem error, unde incidunt voluptas doloribus ab quis expedita tenetur, a, nemo laboriosam maiores ea? Consequuntur corrupti architecto accusamus doloremque eum asperiores exercitationem facilis non cupiditate voluptas numquam, quasi veritatis libero voluptatum laboriosam iure repudiandae quae debitis recusandae unde quos beatae vero? Perspiciatis quo repudiandae nulla fugiat veniam, libero a officia praesentium similique illum? Amet adipisci culpa animi nesciunt corporis nisi veniam sunt saepe quas facere voluptatum quasi unde sequi, odio harum eveniet quidem porro vero praesentium molestias nemo! Pariatur delectus obcaecati consequuntur dolore. Porro mollitia at voluptates eius dolore eum molestiae similique ea, in error, quibusdam et ullam. Tempora facilis, assumenda, accusantium recusandae ex cupiditate nemo nesciunt eius voluptates distinctio at odio iusto corporis commodi fugiat, aut non! Nulla, nobis quisquam. Obcaecati impedit quod, quibusdam veritatis ut amet quaerat dolor iure aspernatur debitis praesentium ab dignissimos nulla nobis voluptatem repellat adipisci quos tempore enim libero incidunt, magnam cupiditate. Officia totam, consequatur neque asperiores, eum dicta voluptate cumque in magni deserunt tempora voluptatem. Debitis.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   
   <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>


    <script>
        var personal_details = document.getElementById('personal_details[]');
        var icons_list = {
            'name_span': '',
            'email_span': 'fa-solid fa-envelope',
            'jobTitle_span': '',
            'phone_span': 'fa-solid fa-phone',
            'address_span': 'fa-solid fa-location-dot',
            'nationality_span': 'fas  fa-flag ',
            'passport_span': 'fa-solid fa-passport',
            'martial_status_span': 'fa-solid fa-heart',
            'military_service_span': 'fa-solid fa-person-military-rifle',
            'driving_license_span': 'fa-solid fa-car',
            'gender_span': 'fa-solid fa-user',
            'dob_span': 'fa-solid fa-calendar-days'

        };

        function updateSpan(input) {
            console.log('update span called\n');
            var inputValue = input.value;
            var inputId = input.id;

            var spanId = inputId + "_span";
            console.log(spanId);
            var existingSpan = document.getElementById(spanId);

            if (existingSpan) {
                existingSpan.textContent = inputValue;
            } else {
                var newDiv = document.createElement('div');
                var newSpan = document.createElement('span');
                var newIcon = document.createElement('i');
                newIcon.className = icons_list[spanId];
                newDiv.className = 'col';
                newDiv.appendChild(newIcon);
                newDiv.appendChild(newSpan);
                newSpan.id = spanId;
                newSpan.textContent = inputValue;
                if (spanId == "name_span") {
                    newSpan.className = "container-fluid bg-info  w-100 fw-bold text-3xl my-1";
                } else if (spanId == 'job_title_span') {
                    newSpan.className = "text-black bg-info text-2xl my-1";

                } else {
                    newSpan.className = 'mx-2';
                }
                console.log(newIcon);

                document.getElementById('resume_personal_details').appendChild(newDiv);
            }
        }
    </script>
    <script>
        $(document).ready(function() {

            function add_more_fields() {
                return `
<label for="dob" class="text-dark mt-2 mb-1 fw-bold">Date of Birth</label> <span class="text-gray-400 text-xs ml-1">optional</span> <br>
<input type="text" id="dob" name="personal_details[]" oninput="updateSpan(this)" class="bg-gray-200 rounded-lg py-2 pl-4" placeholder="Enter Job Title">

<br>
`;
            }

            $('#btn_add_dob').on('click', function() {
                console.log('button pressed');
                $('#add_dob').append(add_more_fields());
            })
        });
    </script>


</body>

</html>