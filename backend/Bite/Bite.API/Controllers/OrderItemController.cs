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
    public class OrderItemController : ControllerBase
    {
        private readonly BiteContext _context;

        public OrderItemController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<OrderItem>> Get()
        {
            return await _context.OrderItem.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await _context.OrderItem.FirstOrDefaultAsync(r => r.Id == id);
            if(obj == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(obj);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(OrderItem model)
        {
            var menuItem = await _context.MenuItem.FirstOrDefaultAsync(r => r.Id == model.MenuItemId);
            if(menuItem == null)
            {
                return BadRequest("MenuItem not found");
            }
            await _context.OrderItem.AddAsync(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Post", model);
        }

        [HttpPut]
        public async Task<IActionResult> Put(OrderItem model)
        {
            var menuItem = await _context.MenuItem.FirstOrDefaultAsync(r => r.Id == model.MenuItemId);
            if (menuItem == null)
            {
                return BadRequest("MenuItem not found");
            }
            _context.OrderItem.Update(model);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}