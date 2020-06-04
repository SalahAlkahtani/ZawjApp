using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [StringLength(8, MinimumLength = 4, ErrorMessage = "كلمة السر يجب ان لاتقل عن اربعة احرف ولا تزيد عن 8 احرف")]
        public string Password { get; set; }
    }
}