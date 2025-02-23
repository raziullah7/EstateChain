using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class PropertiesController(EstateChainDbContext context) : BaseApiController
{
    [HttpGet]
    public ActionResult<IEnumerable<Property>> Get()
    {
        return context.Properties.ToList();
    }
}