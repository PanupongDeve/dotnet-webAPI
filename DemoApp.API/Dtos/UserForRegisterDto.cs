using System.ComponentModel.DataAnnotations;

namespace DemoApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(20, ErrorMessage="you must specify between 4 and 8", MinimumLength = 4)]
        public string Password { get; set; }
    }
}