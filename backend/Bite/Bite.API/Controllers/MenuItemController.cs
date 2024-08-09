using Bite.API.Common;
using Bite.API.Models;
using Bite.Data;
using Bite.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bite.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuItemController : ControllerBase
    {
        private readonly BiteContext _context;

        public MenuItemController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<MenuItem>> Get()
        {
            return await _context.MenuItem.Include(m => m.Restaurant).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await _context.MenuItem.Include(m => m.Restaurant).FirstOrDefaultAsync(r => r.Id == id);
            if(obj == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(obj);
            }
        }

        [HttpGet("restaurant/{id}")]
        public async Task<IActionResult> GetByRestaurant(int id)
        {
            var obj = await _context.MenuItem.Include(m => m.Restaurant).Where(r => r.Restaurant.Id == id).ToListAsync();
            if (obj == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(obj);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(MenuItemModel model)
        {
            MenuItem obj = Translator.Translate(model);
            var res = await _context.Restaurant.FirstOrDefaultAsync(r => r.Id == model.RestaurantId);
            if (res == null) 
            {
                return BadRequest("Restaurant not found");
            }
            obj.Restaurant = res;
            await _context.MenuItem.AddAsync(obj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Post", obj.Id, obj);
        }

        [HttpPut]
        public async Task<IActionResult> Put(MenuItemModel model)
        {
            MenuItem obj = Translator.Translate(model);
            var res = await _context.Restaurant.FirstOrDefaultAsync(r => r.Id == model.RestaurantId);
            if (res == null)
            {
                return BadRequest("Restaurant not found");
            }
            obj.Restaurant = res;
            _context.MenuItem.Update(obj);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}