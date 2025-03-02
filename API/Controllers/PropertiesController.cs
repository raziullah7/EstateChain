using Application.Properties.Queries;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class PropertiesController : BaseApiController
{
    [HttpGet]   // "localhost/api/properties"
    public async Task<ActionResult<List<Property>>> GetProperties()
    {
        return await Mediator.Send(new GetPropertyList.Query());
    }

    [HttpGet("{id}")]   // "localhost/api/properties/{id}"
    public async Task<ActionResult<Property>> GetPropertyDetail(string id)
    {
        return await Mediator.Send(new GetPropertyDetails.Query{Id = id});
    }

}