using System.ComponentModel.DataAnnotations;

namespace DemoApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage="you must specify between 4 and 8")]
        public string Password{ get; set; }
    }
}