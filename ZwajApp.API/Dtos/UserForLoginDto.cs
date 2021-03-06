using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string username { get; set; }
        [StringLength(8, MinimumLength = 4, ErrorMessage = "كلمة السر يجب ان لاتقل عن اربعة احرف ولا تزيد عن 8 احرف")]
        [Required]
        public string password { get; set; }
        
    }
}