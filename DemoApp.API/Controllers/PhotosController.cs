using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using DemoApp.API.Data;
using DemoApp.API.Dtos;
using DemoApp.API.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace DemoApp.API.Controllers
{

    [Authorize]
    [Route("api/users/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloundinarySettings> _cloundinaryConfig;
        private Cloudinary _cloundinary;
        public PhotosController(IDatingRepository repo, IMapper mapper,
       
            IOptions<CloundinarySettings> cloundinaryConfig)
        {
            _cloundinaryConfig = cloundinaryConfig;
            _mapper = mapper;
            _repo = repo;

            Account acc = new Account(
                _cloundinaryConfig.Value.CloundName,
                _cloundinaryConfig.Value.ApiKey,
                _cloundinaryConfig.Value.ApiSecret
            );

            _cloundinary = new Cloudinary(acc);
        }

        //  [HttpPost]
        // public async Task<IActionResult> AddPhotoForUser(int userId, PhotoForCreationDto photoForCreationDto) 
        // {
            
        // }

    }

   
}