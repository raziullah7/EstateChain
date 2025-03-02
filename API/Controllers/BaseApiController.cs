using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController : ControllerBase
{
    // not using Dependency Injection
    private IMediator? _mediator;
    
    // using lazy initialization with null-coalescing assignment and null-coalescing operators
    protected IMediator Mediator => _mediator 
        ??= HttpContext.RequestServices.GetService<IMediator>()
        ?? throw new InvalidOperationException("Mediator service is unavailable");
}