using Application.Properties.Commands;
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

    [HttpPost]
    public async Task<ActionResult<string>> PostProperty(Property property)
    {
        return await Mediator.Send(new CreateProperty.Command {Property = property});
    }

    [HttpPut]
    public async Task<ActionResult> EditProperty(Property property)
    {
        await Mediator.Send(new EditProperty.Command{Property = property});
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteProperty(string id)
    {
        await Mediator.Send(new DeleteProperty.Command{Id = id});
        return Ok();
    }
}