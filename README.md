
#Image Search Abstraction Layer
##An API for simplified searching for images, powered by Google.
###Performing Searches

To use, append to this site's URL:

>/api/imagesearch/your search terms?offset=[how far into the results to start]

Results are returned in batches of ten, so if you wanted to see the first ten pictures of George Clooney:

>/api/imagesearch/George Clooney?offset=1

But say those first ten are too mainstream. You are a George Clooney hipster, and you want to scour the deep web for the most elusive, least known Clooney pics you can get your grubby hands on. Then you would do:

>/api/imagesearch/George Clooney?offset=5000

###View The Most Recent Searches

To see what the coolest kids have been searching over the past week, simply append the following:

>/api/latest/imagesearch/

Wow! She views the latest searches. You'll never believe what's number 1.
