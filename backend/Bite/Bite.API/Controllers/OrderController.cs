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
    public class OrderController : ControllerBase
    {
        private readonly BiteContext _context;

        public OrderController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<Order>> Get()
        {
            return await _context.Order.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await _context.Order.FirstOrDefaultAsync(r => r.Id == id);
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
        public async Task<IActionResult> Post(OrderModelPost model)
        {
            var waiter = await _context.Waiter.FirstOrDefaultAsync(r => r.Id == model.WaiterId);
            if(waiter == null)
            {
                return BadRequest("Waiter not found");
            }
            var table = await _context.DinningTable.FirstOrDefaultAsync(r => r.Id == model.DinningTableId);
            if (table == null)
            {
                return BadRequest("DinningTable not found");
            }
            Order obj = Translator.Translate(model);
            obj.Waiter = waiter;
            obj.DinningTable = table;
            await _context.Order.AddAsync(obj);
            await _context.SaveChangesAsync();
            return CreatedAtAction("Post", model);

        }
    }
}