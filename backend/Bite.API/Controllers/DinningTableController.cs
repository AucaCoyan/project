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
    public class DinningTableController : ControllerBase
    {
        private readonly BiteContext _context;

        public DinningTableController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<DinningTable>> Get()
        {
            return await _context.DinningTable.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await _context.DinningTable.FirstOrDefaultAsync(r => r.Id == id);
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
        public async Task<IActionResult> Post(DinningTable obj)
        {
            await _context.DinningTable.AddAsync(obj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Post", obj.Id, obj);
        }

        [HttpPut]
        public async Task<IActionResult> Put(DinningTable obj)
        {
            _context.DinningTable.Update(obj);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}