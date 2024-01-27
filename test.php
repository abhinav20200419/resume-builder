<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll Separation</title>
    <!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Set a fixed height for the container */
        .scroll-container {
            height: 100vh;
            display: flex;
        }

        /* Style for the left part */
        .left-part {
            flex: 1;
            /* Take up remaining space */
            overflow-y: auto;
            /* Enable vertical scrolling */
            border-right: 1px solid #ccc;
            /* Optional: Add a border between parts */
            scrollbar-width: thin;
            /* Firefox *//* 
            scrollbar-color: transparent transparent; */
            /* Firefox */
        }

        /* Style for the right part */
        .right-part {
            flex: 1;
            /* Take up remaining space */
            overflow-y: auto;
            /* Enable vertical scrolling */
            scrollbar-width: thin;
            /* Firefox *//* 
            scrollbar-color: transparent transparent; */
            /* Firefox */
        }

        /* Hide the scrollbar for Webkit browsers (Chrome, Safari) */
        /* ::webkit-scrollbar {
            display:none;
        } */
        .scroll-container::webkit-scrollbar {
            display: none;
        }

        /* .scroll-container::-webkit-scrollbar-thumb {
            background-color: transparent; 
          } */
        /* Set the scrollbar thumb color to transparent */
    </style>

    
<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-rfPzv2YSxCU98JcMBAYgq7loEhhrJzOpFwbpNlDJt2Oz9BO8UdkkYb9S3RLl" crossorigin="anonymous"></script>
</head>

<body>



    <!-- Scroll container with left and right parts -->
    <div class="scroll-container">

        <!-- Left part -->
        <div class="left-part p-4">
            <!-- Content for the left part -->
            <<div class="accordion accordion-flush" id="accordionFlushExample">
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
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        </p>
    </div>

    <!-- Right part -->
    <div class="right-part p-4">
        <!-- Content for the right part -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi quisquam debitis dolor, neque, animi ut voluptatibus eum veritatis vitae esse dolores dolorem pariatur repellat iure. Officiis, illum ullam dolor expedita numquam exercitationem non tenetur eum id harum voluptatibus nisi laboriosam, sapiente veniam sint error vero deleniti perspiciatis asperiores ut. Et, officia voluptates assumenda perspiciatis dolores laboriosam consequatur tempora aliquam sit! Unde, optio iste praesentium provident reiciendis veniam laborum nobis, accusantium consectetur ipsam pariatur officiis fuga numquam illo quis delectus totam at ipsa ratione fugiat excepturi inventore nostrum hic! Minima quam perspiciatis doloribus expedita eveniet, inventore nobis harum quod vero!

        </p>
        </p>
    </div>

    </div>

</body>

</html>