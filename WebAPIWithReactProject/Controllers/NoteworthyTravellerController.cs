using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPIWithReactProject.Models;

namespace WebAPIWithReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteworthyTravellerController : ControllerBase
    {
        private readonly TravellerDbContext _context;

        public NoteworthyTravellerController(TravellerDbContext context)
        {
            _context = context;
        }

        // GET: api/NoteworthyTraveller
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NoteworthyTraveller>>> GetNoteworthyTravellers()
        {
          return await _context.NoteworthyTravellers.ToListAsync();
        }

        // GET: api/NoteworthyTraveller/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NoteworthyTraveller>> GetNoteworthyTraveller(long id)
        {
          var noteworthyTraveller = await _context.NoteworthyTravellers.FindAsync(id);

          if (noteworthyTraveller == null)
          {
              return NotFound();
          }

          return noteworthyTraveller;
        }

        // PUT: api/NoteworthyTraveller/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNoteworthyTraveller(long id, NoteworthyTraveller noteworthyTraveller)
        {
            if (id != noteworthyTraveller.Id)
            {
                return BadRequest();
            }

            _context.Entry(noteworthyTraveller).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteworthyTravellerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NoteworthyTraveller
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NoteworthyTraveller>> PostNoteworthyTraveller(NoteworthyTraveller noteworthyTraveller)
        {
          _context.NoteworthyTravellers.Add(noteworthyTraveller);
          try
          {
              await _context.SaveChangesAsync();
          }
          catch (DbUpdateException)
          {
              if (NoteworthyTravellerExists(noteworthyTraveller.Id))
              {
                  return Conflict();
              }
              else
              {
                  throw;
              }
          }

          return CreatedAtAction("GetNoteworthyTraveller", new { id = noteworthyTraveller.Id }, noteworthyTraveller);
        }

        // DELETE: api/NoteworthyTraveller/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNoteworthyTraveller(long id)
        {
            var noteworthyTraveller = await _context.NoteworthyTravellers.FindAsync(id);
            if (noteworthyTraveller == null)
            {
                return NotFound();
            }

            _context.NoteworthyTravellers.Remove(noteworthyTraveller);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NoteworthyTravellerExists(long id)
        {
            return (_context.NoteworthyTravellers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
