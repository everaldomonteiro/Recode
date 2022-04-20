using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using dotnet.Data;
using dotnet.Models;

namespace dotnet.Controllers
{
    public class FazController : Controller
    {
        private readonly DBContext _context;

        public FazController(DBContext context)
        {
            _context = context;
        }

        // GET: Faz
        public async Task<IActionResult> Index()
        {
            var dBContext = _context.Faz.Include(f => f.cliente).Include(f => f.viagem);
            return View(await dBContext.ToListAsync());
        }

        // GET: Faz/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var faz = await _context.Faz
                .Include(f => f.cliente)
                .Include(f => f.viagem)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (faz == null)
            {
                return NotFound();
            }

            return View(faz);
        }

        // GET: Faz/Create
        public IActionResult Create()
        {
            ViewData["ClienteID_Cliente"] = new SelectList(_context.Cliente, "ID_Cliente", "Cpf");
            ViewData["ViagemID_Viagem"] = new SelectList(_context.Viagem, "ID_Viagem", "Destino");
            return View();
        }

        // POST: Faz/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ClienteID_Cliente,ViagemID_Viagem")] Faz faz)
        {
            if (ModelState.IsValid)
            {
                _context.Add(faz);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ClienteID_Cliente"] = new SelectList(_context.Cliente, "ID_Cliente", "Cpf", faz.ClienteID_Cliente);
            ViewData["ViagemID_Viagem"] = new SelectList(_context.Viagem, "ID_Viagem", "Destino", faz.ViagemID_Viagem);
            return View(faz);
        }

        // GET: Faz/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var faz = await _context.Faz.FindAsync(id);
            if (faz == null)
            {
                return NotFound();
            }
            ViewData["ClienteID_Cliente"] = new SelectList(_context.Cliente, "ID_Cliente", "Cpf", faz.ClienteID_Cliente);
            ViewData["ViagemID_Viagem"] = new SelectList(_context.Viagem, "ID_Viagem", "Destino", faz.ViagemID_Viagem);
            return View(faz);
        }

        // POST: Faz/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ClienteID_Cliente,ViagemID_Viagem")] Faz faz)
        {
            if (id != faz.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(faz);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FazExists(faz.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["ClienteID_Cliente"] = new SelectList(_context.Cliente, "ID_Cliente", "Cpf", faz.ClienteID_Cliente);
            ViewData["ViagemID_Viagem"] = new SelectList(_context.Viagem, "ID_Viagem", "Destino", faz.ViagemID_Viagem);
            return View(faz);
        }

        // GET: Faz/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var faz = await _context.Faz
                .Include(f => f.cliente)
                .Include(f => f.viagem)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (faz == null)
            {
                return NotFound();
            }

            return View(faz);
        }

        // POST: Faz/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var faz = await _context.Faz.FindAsync(id);
            _context.Faz.Remove(faz);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool FazExists(int id)
        {
            return _context.Faz.Any(e => e.Id == id);
        }
    }
}
