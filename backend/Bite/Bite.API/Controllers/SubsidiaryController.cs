using Bite.API.Common;
using Bite.API.Models;
using Bite.Data;
using Bite.Data.DAO;
using Bite.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bite.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubsidiaryController : ControllerBase
    {
        private readonly BiteContext _context;

        public SubsidiaryController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<Subsidiary>> Get()
        {
            //return await new RestaurantDAO().Get();
            return await _context.Subsidiary.ToListAsync();
        }

        //[HttpGet("{id}")]
        //public async Task<IActionResult> Get(int id)
        //{
        //    var obj = await _context.Subsidiary.FirstOrDefaultAsync(r => r.Id == id);
        //    if(obj == null)
        //    {
        //        return NotFound();
        //    }
        //    else
        //    {
        //        return Ok(obj);
        //    }
        //}

        //[HttpPost("{restaurantId}")]
        //public async Task<IActionResult> Post(SubsidiaryModel model, int restaurantId)
        //{
        //    var restaurant = await _context.Restaurant.FirstOrDefaultAsync(c => c.Id == model.RestaurantId);
        //    if(restaurant == null)
        //    {
        //        return BadRequest("Restaurant Id not found.");
        //    }
        //    else
        //    {

        //        Subsidiary obj = Translator.Translate(model, restaurant);
        //        await _context.Subsidiary.AddAsync(obj);
        //        await _context.SaveChangesAsync();
        //        return CreatedAtAction("Post", obj.Id, obj);
        //    }
        //}
    }
}