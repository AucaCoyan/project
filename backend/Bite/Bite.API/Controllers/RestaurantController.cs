﻿using Bite.API.Models;
using Bite.Data;
using Bite.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bite.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RestaurantController : ControllerBase
    {
        private readonly BiteContext _context;

        public RestaurantController(BiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IList<Restaurant>> Get()
        {
            return await _context.Restaurant.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var restaurant = await _context.Restaurant.FirstOrDefaultAsync(r => r.Id == id);
            if(restaurant == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(restaurant);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Post(Restaurant obj)
        {
            await _context.Restaurant.AddAsync(obj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Post", obj.Id, obj);
        }

        [HttpPut]
        public async Task<IActionResult> Put(Restaurant obj)
        {
            _context.Restaurant.Update(obj);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}