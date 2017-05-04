$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function(response) {
        console.log(response);

        for (var index = 0; index < response.length; index++) {
            var user = response[index];
            updateUserInformation(index, user);
        }
    }
})

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);

    //set the user image
    $user
        .find('.thumbnail')
        .find('img')
        .attr('src', user.picture);

    //set the user name
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('h3')
            .text(user.name.first + " " + user.name.last);

    //set the user company name
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('.company')
        .find('.name')
        .text(user.company.name);
    
    //set the user company address - street
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('.company')
        .find('.street')
        .text(user.company.address.street);

    //set the user company address - city
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('.company')
        .find('.city')
        .text(user.company.address.city);

    //set the user company address - state
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('.company')
        .find('.state')
        .text(user.company.address.state);

    //set the user company address - zip
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('.company')
        .find('.zip')
        .text(user.company.address.zip);

    //set the user email address
    $user
        .find('.thumbnail')
        .find('.caption')
        .find('.company')
        .find('a')
            .text(user.company.email)
            .attr("href", "mailto:" + user.company.email)

    //set the background color
    $user.css('background-color', user.favoriteColor)
}