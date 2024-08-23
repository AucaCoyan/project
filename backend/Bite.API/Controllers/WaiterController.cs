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
    public class WaiterController : ControllerBase
    {
        private readonly BiteContext _context;

        public WaiterController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<Waiter>> Get()
        {
            return await _context.Waiter.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await _context.Waiter.FirstOrDefaultAsync(r => r.Id == id);
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
        public async Task<IActionResult> Post(Waiter obj)
        {
            await _context.Waiter.AddAsync(obj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Post", obj.Id, obj);
        }

        [HttpPut]
        public async Task<IActionResult> Put(Waiter obj)
        {
            _context.Waiter.Update(obj);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}